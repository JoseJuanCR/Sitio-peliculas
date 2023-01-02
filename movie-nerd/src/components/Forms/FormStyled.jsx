import styled from "styled-components";

const FormContainer= styled.div`
    width: 50rem;
    margin: 2px auto;
    background-color: var(--section);
    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 1rem;
        label{
            display: block;
            font-size: 2rem;
        }
        input{
            display: inline-block;
            height: 3rem;
            margin-top: 1rem;
            font-size: 2rem;
        }
        button{
            font-size: 2rem;
        }
    }


`

export default FormContainer