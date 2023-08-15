import * as React from 'react';
import {useEffect, useState} from "react";
import {PageProps} from "gatsby";

function getNextThursday(date = new Date()) {
    if (date.getDay() === 4) {
        return date;
    }

    return new Date(
        date.setDate(
            date.getDate() + ((7 - date.getDay() + 4) % 7 || 7),
        ),
    );
}
const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

const getParsedUser = (rawUser) => {
    try {
        const user = JSON.parse(rawUser);

        return user;
    } catch (e) {
        return null;
    }
}

const FootballRoute = ({ path }: PageProps) => {
    const nextFootball = getNextThursday().toISOString().split('T')[0];
    const formName = `football-${nextFootball}`;
    const user = getParsedUser(localStorage.getItem('user'));
    const [name, setName] = useState(() => user?.name || '');
    const [level, setLevel] = useState(() => user?.level || 0);
    const [submissions, setSubmissions] = useState([]);

    const handleSubmit = (e) => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": formName, name, level })
        })
            .then((...args) => {
                console.log('success form args', args);
                if (!user) {
                    localStorage.setItem('user', JSON.stringify({ name, level }))
                }
            })
            .catch(error => console.error(error));

        e.preventDefault();
    }

    useEffect(() => {
        fetch('/api/v1/sites/71f58b67-2beb-42b5-b068-03e740858be4/forms').then((rawData) => {
            return rawData.json().then(data => data.find(form => form.name));
        }).then((form) => {
            if (form) {
                return fetch(`/api/v1/forms/${form.id}/submissions`).then(res => res.json()).then((submissions) => {
                    setSubmissions(submissions);
                })
            }
        })
    }, []);

  return (
    <main>
      <h1>Futebol Data {nextFootball}</h1>
        <h3>Inscritos: {submissions.length}</h3>
        {submissions.map(({ name }) => (
            <div>
                {name}
            </div>
        ))}

        <form onSubmit={handleSubmit}>
            <p>
                <label>
                    Nome: <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
            </p>
            <p>
                <label>
                    Nível: <input type="number" name="level" value={level} onChange={(e) => setLevel(e.target.value)} />
                </label>
            </p>
            <p>
                <button type="submit">VOU</button>
            </p>
        </form>
    </main>
  )
}

export default FootballRoute;

export const slug = '/football';
export const title = 'Futebol';