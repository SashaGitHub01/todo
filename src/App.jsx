import React from 'react';
import Layout from './components/Layout/Layout';

function App() {
   const getCityStr = (arr) => {
      return arr.map((str, i) => {
         if (i === arr.length - 1) return str + '.'
         return str + ', '
      }).join('')
   }

   console.log(getCityStr(['Москва', 'Санкт-Петербург', 'Воронеж']))
   // 27 => 25, 27.8 => 30, 41.7 => 40.
   const getRound = (float) => {
      const rest = +(float % 10).toFixed(1);

      if (rest === 5) {
         return float
      } else if (rest <= 2.5) {
         return Math.round(float - rest)
      } else if (rest >= 2.5) {
         return Math.round(float + rest * 0.01 / 2)
      }else if (rest >= 7.5) {
         return Math.round(float + rest * 0.01 / 2)
      }

   }

   console.log(getRound(22.6))
   console.log(getRound(21.5))
   console.log(getRound(29.5))

   return (
      <div className="g">

      </div>
   );
}

export default App;
