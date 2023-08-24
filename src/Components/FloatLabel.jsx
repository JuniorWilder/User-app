import React from 'react'
import { FloatingLabel } from 'react-bootstrap'
import { FormControl } from 'react-bootstrap'
export const FloatLabel = () => {
    return (
        <div>
            <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
            >
                <FormControl type="email" placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
                <FormControl type="password" placeholder="Password" />
            </FloatingLabel>
        </div>
    )
}
