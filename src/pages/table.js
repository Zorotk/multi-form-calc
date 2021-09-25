import React, {useState} from 'react';
import './table.scss'
import {useForm} from "react-hook-form";

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
                    res += `obj.${i}.${j}, `
                }
            } else {
                res += `obj.${i}, `
            }
        }
        return res.substring(0, res.length - 2)
    }

    function test(arr) {
        return arr.forEach(element => {
            console.log(test1(element));
        });
    }

    test(arr)

    // const a = arr => console.log(...arr.flatMap(({ info, name }) => [name, Object.keys(info).map(k => `info.${k}`)]).map(v => `obj.${v}`))
    // a(arr)

    const createArr = (length) => {
        return Array.from(Array(length));
    };
    const {register, handleSubmit, errors} = useForm();
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


    // const obj = [{
    //     id: "id0",
    //     fields: {
    //         name: 11,
    //         info: 'value11'
    //     }
    // }, {
    //     id: "id1",
    //     fields: {
    //         name: 12,
    //         info: 'value12'
    //     }
    // }, {
    //     id: "id2",
    //     fields: {
    //         name: 13,
    //         info: 'value13'
    //     }
    // }]
    //
    // const filterArray = [['name', 11], ['info', 'value13']];
    // const filter = new Map(filterArray)
    //
    // const f = (obj) =>
    //     obj.filter((item) =>
    //         Object.entries(item.fields).some(([k, v]) => {
    //             const value = filter.get(k);
    //             return value === undefined || typeof value === "string" ? v.startsWith(value) : value === v
    //         })
    //     );
    //
    // console.log(f(obj), 'filter');


    // let arr1 = [[1, 1, 1],
    // [1, 0, 1],
    // [1, 1, 1]]
    // let arr2 = [[0, 1, 2, 0],
    // [3, 4, 5, 2],
    // [1, 3, 1, 5]]
    // let arr3 =
    //     [[0, 1, 6, 7, 0],
    //     [5, 1, 0, 7, 8],
    //     [9, 5, 2, 7, 8],
    //     [9, 5, 2, 7, 8],
    //     [9, 5, 1, 7, 8]]
    // const setZero = (matrix) => {
    //     const col = []
    //     matrix.map((rows) => {
    //         if (rows.includes(0)) {
    //             rows.map((el, i, arr) => {
    //                 if (el == 0) col.push(i)
    //                 arr[i] = 0
    //             })

    //         }
    //     })
    //     col.map((el) => {
    //         matrix.map((e, i, arr) => {
    //             arr[i][el] = 0
    //         })
    //     })
    //     return matrix
    // }

    // console.log(setZero(arr1))
    // console.log(setZero(arr2))
    // console.log(setZero(arr3))
    // const csv = 'a; a1; a2; a3 b; b1; b2; b3b; b2; b2; b3 b; b2; b2; b3 '

    // const csv = 'a; a1; a2; a3; b; b1; b2; b3'
    // const csvArr = csv.split(';')
    // function createChildObj(el, i, objElement) {
    //     const obj = [
    //         {
    //             "name": el,
    //             "value": 1,
    //             "children": [{ ...objElement }]
    //         }]
    //     return obj
    // }
    // const resAr = csvArr.forEach((el, i) => {
    //     console.log(el.trim().length > 1, 'el');
    //     const objElement = {
    //         "name": el,
    //         "value": 1,
    //         "children": []
    //     }
    //     return createChildObj(el, i, objElement)
    //     // return objElement
    // })
    // console.log(csvArr);
    // console.log(resAr);
    // const arr11 = [1, 2, 2, 1, 1]
    // const arr12 = [2, 2, 1]
    // const arr13 = [4, 9, 5, 3, 4]
    // const arr14 = [9, 4, 9, 8, 4, 3, 4]
    // const intersect = function (num1, num2) {
    //     const result = []
    //     const map = num1.reduce((el, i) => {
    //         el[i] = el[i] ? el[i] + 1 : 1
    //         return el
    //     }, {})
    //     num2.forEach((el, i) => {
    //         const count = map[el]
    //         if (count && count > 0) {
    //             result.push(el)
    //             map[el] -= 1
    //         }
    //     })
    //     return result
    // }


    // const intersect = (num1, num2) => num1.filter((el) => num2.includes(el))
    // const intersect = (num1, num2) => {
    //     const nums = Object.fromEntries(num2.map(n => [n, n]))
    //     console.log(nums);

    //     return num1.filter(n => n in nums)
    // }
    // console.log(intersect(arr11, arr12));
    // console.log(intersect(arr13, arr14));


    // const csv = `a;a1;a2;a3
    // b;b1;b2;b3;b4;b5;
    // b;b2;b2;b3
    // b;b2;b2;b3`
    // const tree = [];
    //
    //
    // csv.split("\n").map((el, i) => {
    //     const cell = el.split(';')
    //
    //     let res = tree
    //     cell.forEach((el) => {
    //         if (!res.find(e => e.name === el)) {
    //             res.push({
    //                 name: el,
    //                 top: 1,
    //                 children: []
    //             })
    //         }
    //         res = res.find(e => e.name === el).children
    //     })
    // })
    // console.log(tree);


    // csv.split("\n").map((r) => {
    //     const cells = r.split(";");
    //     console.log(cells);

    //     let root = tree;
    //     for (let cell of cells) {
    //         if (!root.find((c) => c.name === cell)) {
    //             root.push({
    //                 name: cell,
    //                 value: 1,
    //                 children: []
    //             });
    //         }
    //         root = root.find((c) => c.name === cell).children;

    //     }

    // });

    // console.log(tree, 'tree');


    //    const setZero = (matrix) => {
    //         let col = []
    //         matrix.map((e) => {
    //             if (e.includes(0)) {
    //                 e.map((el, i, arr) => {
    //                     if (el == 0) col.push(i)
    //                     arr[i] = 0
    //                 })
    //             }
    //         })
    //         col.forEach((e) => {
    //             matrix.forEach((el, i, arr) => {
    //                 arr[i][e] = 0
    //                 console.log(arr,'arr');
    //             })
    //         })
    //         return matrix
    //     }

    // let grid1 = [
    //     ['1', '0', '1', '1', '0'],
    //     ['0', '0', '0', '1', '1'],
    //     ['0', '0', '0', '0', '0'],
    //     ['1', '0', '1', '0', '1']
    // ];
    //
    // let grid2 = [
    //     ['1', '1', '0', '0', '1'],
    //     ['1', '1', '0', '0', '1'],
    //     ['1', '0', '1', '0', '1'],
    //     ['1', '0', '0', '1', '1']
    // ];
    // let numIslands = function
    //     (matrix) {
    //
    //     let count = 0
    //
    //     function matrixCount(m, x, y) {
    //         m[x][y] = 9
    //         if (m?.[x - 1]?.[y] == 1) {
    //             matrixCount(m, x - 1, y)
    //         }
    //         if (m?.[x + 1]?.[y] == 1) {
    //             matrixCount(m, x + 1, y)
    //         }
    //         if (m[x][y - 1] == 1) {
    //             matrixCount(m, x, y - 1)
    //         }
    //         if (m[x][y + 1] == 1) {
    //             matrixCount(m, x, y + 1)
    //         }
    //         if (m?.[x - 1]?.[y - 1] == 1) {
    //             matrixCount(m, x - 1, y - 1)
    //         }
    //         if (m?.[x + 1]?.[y + 1] == 1) {
    //             matrixCount(m, x + 1, y + 1)
    //         }
    //     }
    //
    //     matrix.forEach((r, x) => {
    //         r.forEach((c, y) => {
    //             if (c == 1) {
    //                 count++
    //                 matrixCount(matrix, x, y)
    //             }
    //         })
    //     })
    //     return count
    // }


    // console.log(grid1, grid2);


    // let numIslands = function (grid) {
    //     if (grid.length === 0) return 0
    //     let rowsL = grid.length;
    //     let colsL = grid[0].length;
    //     let counter = 0;

    //     function markNeighbours(binaryMatrix, R, C) {
    //         binaryMatrix[R][C] = '6';
    //         if (binaryMatrix?.[R - 1]?.[C] === '1') { markNeighbours(binaryMatrix, R - 1, C) }
    //         if (binaryMatrix?.[R + 1]?.[C] === '1') { markNeighbours(binaryMatrix, R + 1, C) }
    //         if (binaryMatrix[R][C - 1] === '1') { markNeighbours(binaryMatrix, R, C - 1) }
    //         if (binaryMatrix[R][C + 1] === '1') { markNeighbours(binaryMatrix, R, C + 1) }
    //     }

    //     for (let R = 0; R < rowsL; R++) {
    //         for (let C = 0; C < colsL; C++) {

    //             if (grid[R][C] === '1') {
    //                 counter++;
    //                 markNeighbours(grid, R, C);
    //             }
    //         }
    //     }

    //     return counter;
    // };

    // console.log(numIslands(grid1));
    // console.log(numIslands(grid2));

    // function rec(object, filters) {


        // const filterKey = filters.forEach((value, key) => {
        //     console.log(key);
        // });
        // console.log(filters);

        // return object.filter((el,i) => {
        //    console.log(i);
        //    const arr = ['value13', 'value11']
        //     return  el.fields.info==arr[i]
        // console.log(Object.keys(el).map((e) => {
        //     if (typeof el.e === "object") {
        //     return 'es'
        //     }
        //     console.log(e);
        //  }));
        // })
    // }

    // console.log(rec(obj, filter), 'res');


    // function filters(arr, callback) {

    //     function rec() {

    //     }

    // }

    // filters([1, 2, 3, 4, 5], n => n > 3)


    // const filtere = (arr, fn) => {
    //     const rec = (result) => {
    //         if (arr.length === 0) {
    //             return result;
    //         }

    //         const item = arr.pop();

    //         return rec(fn(item) ? [...result, item] : result);
    //     };

    //     return rec([]);
    // };

    // console.log(filtere([1, 2, 3, 4, 5], (n) => n > 3));

    //     function testss(obj) {
    //         let res = ''
    //         for (let i in obj) {
    //             if (typeof obj[i] === "object") {
    //                 for (let j in obj[i]) {
    //                     // res += `obj.${i}.${j}, `
    //                     if (typeof j === "object") { console.log(j); }
    //                 }
    //             }
    //             else {
    //                 res += `obj.${i}, `
    //             }
    //         }
    //         return res.substring(0, res.length - 2)
    //     }
    //    console.log( testss(obj));







    return (
        <div className="fourRow">
            <div>
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <div>
                        <input name="name" type="text"
                               ref={register({
                                   required: true
                               })}/>
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
                                }}>Изменить
                                </button>
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
