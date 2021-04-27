import React, { useState } from 'react';
import './table.scss'
import { useForm } from "react-hook-form";

const Table = () => {

    const obj = {
        id: "id0",
        name: "",
        info: {
            email: "",
            adress: "",
        }
    }
    function test1(obj) {
        let res = ''
        for (let i in obj) {
            if (obj[i] === 'id0') {
                continue
            }
            if (typeof obj[i] !== "object") {
                res += `${i}: obj.${i}, `
            }
            if (typeof obj[i] === "object") {
                for (let j in obj[i]) {
                    res += `${j}: obj.${i}.${j}, `
                }
            }
        }
        return res.substring(0, res.length - 2)
    }
    // console.log(test1(obj))



    const createArr = (length) => {
        return Array.from(Array(length));
    };
    const { register, handleSubmit, errors } = useForm();
    const [formValue, setformValue] = useState('')

    const grid = (width, height) =>
        createArr(width).map(() => createArr(height).map(() => 'hello'));
    const board = grid(7, 7);
    const [display, setDisplay] = useState(board);
    function changeValue(x, y) {
        display[x][y] = formValue
        setDisplay([...display])
    }
    const onSubmit = data => {
        setformValue(data.name)
    }
    const deleteValue = (x, y) => {
        display[x][y] = ''
        setDisplay([...display])
    }

    return (
        <div className="fourRow">
            <div>
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <div >
                        <input name="name" type="text"
                            ref={register({
                                required: true
                            })} />
                        <button type='submit'>добавить</button>
                        <p>{errors.name && 'Введите значение'}</p>
                    </div>
                </form>

                <div className={'grid'}
                    style={{
                        display: "grid",
                        gridTemplateColumns: `repeat(${7}, 100px)`,
                        boxShadow:
                            "0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)",
                    }}
                >
                    {display.map((rows, x) =>
                        rows.map((cols, y) => (
                            <div
                                key={x + y}
                                style={{
                                    height: "100px",
                                    width: "100px",
                                    backgroundColor:
                                        display[x][y] === 1
                                            ? "gold"
                                            : "" + display[x][y] === "2"
                                                ? "darkorchid"
                                                : "",
                                    textAlign: "center",
                                }}
                            >{cols}
                                <button onClick={() => {
                                    changeValue(x, y);
                                }}>Изменить</button>
                                <button onClick={() => deleteValue(x, y)} >Удалить</button>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Table;