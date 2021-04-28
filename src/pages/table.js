import React, { useState } from 'react';
import './table.scss'
import { useForm } from "react-hook-form";

const Table = () => {
    let arr = [{
        id: "id0",
        name: "",
        info: {
            email: "",
            adress: "",
        }
    }, {
        id: "id1",
        name: "",
        info: {
            email: "",
            adress: "",
        }
    }, {
        id: "id2",
        name: "",
        info: {
            email: "",
            adress: "",
        }
    }]

    function test1(obj) {
        let res = ''
        for (let i in obj) {
            if (i === 'id') {
                continue
            }

            if (typeof obj[i] === "object") {
                for (let j in obj[i]) {
                    res += `${j}: obj.${i}.${j}, `
                }
            }
            else {
                res += `${i}: obj.${i}, `
            }
        }
        return res
    }
    function test(arr) {
        return arr.forEach(element => {
            console.log(test1(element));
        });
    }
    test(arr)






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
                            <div className='title'
                                key={x + y}
                                style={{
                                    height: "100px",
                                    width: "100px",
                                    textAlign: "center"
                                }}
                            >{cols}
                                <button onClick={() => {
                                    changeValue(x, y);
                                }}>Изменить</button>
                                <button onClick={() => deleteValue(x, y)}>Удалить</button>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Table;