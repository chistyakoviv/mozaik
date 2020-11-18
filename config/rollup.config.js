import path from 'path';
import typescript from 'rollup-plugin-typescript';
import resolve from 'rollup-plugin-node-resolve';

export default {
    input: path.resolve(__dirname, '../src//Mozaik.ts'),
    output: {
        file: path.resolve(__dirname, '../dist/mozaik.js'),
        format: 'cjs'
    },
    plugins: [
        resolve(),
        typescript()
    ]
};
