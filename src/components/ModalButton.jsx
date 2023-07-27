import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ModalButton.css';
import { Avatar } from '@material-ui/core';
import { ContactMail, CalendarToday, Apartment, BeachAccess, AirlineSeatFlatAngled } from '@material-ui/icons';
import Wizard from './Wizard';

const ModalButton = () => {

    const [show, setShow] = useState(false);

    const modalClose = () => setShow(false);
    const modalShow = () => setShow(true);

    return (
        <div className="App p-4">
            <div className="launch-btn">
                <button className='launch' onClick={modalShow}>
                    Launch demo modal
                </button>
            </div>
            <Modal show={show} onHide={modalClose}>
                <Modal.Header style={{ background: "linear-gradient(273deg, #FFFAE0 0%, rgba(240, 255, 246, 0.00) 100%), #FFC0C0" }}>
                    <div className="header-left">
                        <Avatar style={{ marginRight: "10px" }} />
                        <Modal.Title className="title">
                            ETHAN WONG
                            <br />
                            <span
                                style={{
                                    color: "#00252F",
                                    fontSize: "12px",
                                    fontWeight: "300"
                                }}>
                                Male, 60 yrs (Senior Citizen)
                            </span>
                        </Modal.Title>
                    </div>
                    <div className="header-right">
                        <p
                            style={{
                                color: "#00252F",
                                fontSize: "12px",
                                fontWeight: "300",
                                marginBottom: "2px",
                                marginLeft: "15px"
                            }}>
                            Resident
                        </p>
                        <button
                            style={{
                                width: "67px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                borderRadius: "4px",
                                border: "1px solid #F2F2F2",
                                background: "#FFF"
                            }}
                        >
                            Malaysia
                        </button>
                    </div>
                </Modal.Header>

                <Modal.Body>
                    <div className="ids"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between"
                        }}
                    >
                        <div className="patient"
                            style={{
                                width: "117px",
                                height: "41px",
                            }}
                        >
                            <div
                                style={{
                                    width: "117px",
                                    height: "20px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between"
                                }}
                            >
                                <p
                                    style={{
                                        color: "#AAAAAA"
                                    }}
                                >
                                    Patient ID
                                </p>
                                <ContactMail
                                    style={{
                                        width: "15px",
                                        height: "15px",
                                        color: "#ED8383",
                                        marginBottom: "18px"
                                    }}
                                />
                            </div>
                            <div
                                style={{
                                    backgroundColor: "#FFF6EF",
                                    borderRadius: "0px 0px 4px 4px",
                                }}
                            >
                                <p
                                    style={{
                                        color: "#666666",
                                        textAlign: "left",
                                        fontWeight: "400"
                                    }}
                                >
                                    5321344
                                </p>
                            </div>
                        </div>
                        <div className="visit"
                            style={{
                                width: "117px",
                                height: "41px",
                            }}
                        >
                            <div
                                style={{
                                    width: "117px",
                                    height: "20px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between"
                                }}
                            >
                                <p
                                    style={{
                                        color: "#AAAAAA"
                                    }}
                                >
                                    Visit ID
                                </p>
                                <CalendarToday
                                    style={{
                                        width: "15px",
                                        height: "15px",
                                        color: "#ED8383",
                                        marginBottom: "18px"
                                    }}
                                />
                            </div>
                            <div
                                style={{
                                    backgroundColor: "#FFF6EF",
                                    borderRadius: "0px 0px 4px 4px",
                                }}
                            >
                                <p
                                    style={{
                                        color: "#666666",
                                        textAlign: "left",
                                        fontWeight: "400"
                                    }}
                                >
                                    2735678
                                </p>
                            </div>
                        </div>
                        <div className="ward"
                            style={{
                                width: "117px",
                                height: "41px",
                            }}
                        >
                            <div
                                style={{
                                    width: "117px",
                                    height: "20px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between"
                                }}
                            >
                                <p
                                    style={{
                                        color: "#AAAAAA"
                                    }}
                                >
                                    Ward
                                </p>
                                <Apartment
                                    style={{
                                        width: "15px",
                                        height: "15px",
                                        color: "#ED8383",
                                        marginBottom: "18px"
                                    }}
                                />
                            </div>
                            <div
                                style={{
                                    backgroundColor: "#FFF6EF",
                                    borderRadius: "0px 0px 4px 4px",
                                }}
                            >
                                <p
                                    style={{
                                        color: "#666666",
                                        textAlign: "left",
                                        fontWeight: "400"
                                    }}
                                >
                                    Ward 2A
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bed-info"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            marginTop: "20px"
                        }}
                    >
                        <div className="bed"
                            style={{
                                width: "200px",
                                height: "41px",
                            }}

                        >
                            <div
                                style={{
                                    width: "200px",
                                    height: "20px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between"
                                }}
                            >
                                <p
                                    style={{
                                        color: "#AAAAAA"
                                    }}
                                >
                                    Bed
                                    <span
                                        style={{
                                            color: "#6C6C6C",
                                            fontSize: "10px,",
                                            fontWeight: "400"
                                        }}
                                    >
                                        (F5-102)
                                    </span>
                                </p>
                                <AirlineSeatFlatAngled
                                    style={{
                                        width: "15px",
                                        height: "15px",
                                        color: "#ED8383",
                                        marginBottom: "18px",
                                    }}
                                />
                            </div>
                            <div
                                style={{
                                    backgroundColor: "#FFF6EF",
                                    borderRadius: "0px 0px 4px 4px",
                                }}
                            >
                                <p
                                    style={{
                                        color: "#666666",
                                        textAlign: "left",
                                        fontWeight: "400"
                                    }}
                                >
                                    Single Bed
                                </p>
                            </div>
                        </div>
                        <div className="payor"
                            style={{
                                width: "200px",
                                height: "41px",
                            }}

                        >
                            <div
                                style={{
                                    width: "200px",
                                    height: "20px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "space-between"
                                }}
                            >
                                <p
                                    style={{
                                        color: "#AAAAAA"
                                    }}
                                >
                                    Payor
                                </p>
                                <BeachAccess
                                    style={{
                                        width: "15px",
                                        height: "15px",
                                        color: "#ED8383",
                                        marginBottom: "18px"
                                    }}
                                />
                            </div>
                            <div
                                style={{
                                    backgroundColor: "#FFF6EF",
                                    borderRadius: "0px 0px 4px 4px",
                                }}
                            >
                                <p
                                    style={{
                                        color: "#666666",
                                        textAlign: "left",
                                        fontWeight: "400"
                                    }}
                                >
                                    AIA BHD (INDIVIDUAL)
                                </p>
                            </div>
                        </div>
                    </div>
                </Modal.Body>

                <Modal.Footer
                    style={{
                        backgroundColor: "#F8F8F8"
                    }}
                >
                    <div className="admitted"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: "130px"
                        }}
                    >
                        <h4 style={{
                            fontWeight: "100",
                            color: "#00252F"
                        }}
                        >
                            Admission Journey
                        </h4>
                        <div className="time"
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "5px",
                            }}
                        >
                            <p
                                style={{
                                    color: "#888888",
                                    fontSize: "12px",
                                    fontWeight: "400",
                                    marginTop: "10px"
                                }}
                            >
                                Elapsed Time
                            </p>
                            <button
                                style={{
                                    width: "55px",
                                    height: "30px",
                                    backgroundColor: "#F2F2F2",
                                    color: "red",
                                    textAlign: "center",
                                    border: "none"
                                }}
                            >
                                2:45
                            </button>
                        </div>
                    </div>
                    <Wizard />
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default ModalButton
