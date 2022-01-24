// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';

// Fix problema ao rodar os testes com: npm i -D --exact jest-watch-typeahead@0.6.5
// Adicionado o npm i --save-dev @testing-library/jest-dom
// para ter acesso ao 'toBeInTheDocument'
import '@testing-library/jest-dom/extend-expect';