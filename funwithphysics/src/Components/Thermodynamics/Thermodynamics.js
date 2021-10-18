import React from 'react'
import { Card } from 'react-bootstrap'
import '../Classical Mechanics/classicalMechanics.css' // styles are imported from classical mechanics
import Topics from "./data/topics_thermodynamics"
import bg from '../../Images/bg1.jpg'
import { Link } from "react-router-dom"

export default function Thermodynamics() {
    return (
        <div className="mech__main">
            <div className="mech__header">
                <h1>Thermodynamics-Topics</h1>
            </div>
            <div className="mech__topics-card">
                {
                    Topics.map(data =>
                        <React.Fragment key={data.topic}>
                            <Card key={data.topic} style={{ width: '18rem' }}>
                                <Card.Img alt={data.topic} style={{ height: '15rem', objectFit: "cover" }} variant="top" src={data.image === undefined ? bg : data.image} />
                                <Card.Body>
                                    {
                                        data.details === undefined ?
                                            <Link className="btn" disabled={true} to={`/thermodynamics/calc/${data.topic}`} variant="outline-dark"> {data.topic}</Link> :
                                            <Link className="btn" to={`/thermodynamics/calc/${data.topic}`} variant="outline-dark"> {data.topic}</Link>

                                    }
                                    <div style={{ padding: "0.3em" }}>
                                        {
                                            data.image === undefined ? <Card.Text> Will be <span style={{ fontWeight: "bold", color: "#19165b" }}>available</span> soon...</Card.Text> : <Card.Text>{" "}</Card.Text>
                                        }
                                    </div>
                                </Card.Body>
                            </Card>
                        </React.Fragment>
                    )
                }
            </div>
        </div >
    )
}