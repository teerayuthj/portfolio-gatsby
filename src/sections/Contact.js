/*
import React, { useState } from "react"
import emailjs from "emailjs-com"

export default () => {
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  })

  const [inputs, setInputs] = useState({
    email: "",
    name: "",
    message: "",
    service_id: "Contact",
    template_id: "template_yVhr6Q42",
    user_id: "user_1tFroCZhudfIauFRHxQmb",
  })

  const handleResponse = (status, msg) => {
    if (status === 200) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg },
      })
      setInputs({
        email: "",
        name: "",
        message: "",
      })
    } else {
      setStatus({
        info: { error: true, msg },
      })
    }
  }

  const handleOnChange = e => {
    e.persist()
    setInputs(prev => ({
      ...prev,
      [e.target.id]: e.target.value,
    }))
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    })
  }

  const handleOnSubmit = async e => {
    e.prevenDefault()
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }))
    const res = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    })
    const text = await res.text()
    handleResponse(res.status, text)
  }
}
*/
