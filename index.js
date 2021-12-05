

// stop spacebar scrolling
window.addEventListener('keydown', (e) => {  
    if (e.keyCode === 32 && e.target === document.body) {  
      e.preventDefault();  
    }  
  });


// Typing speed test
const typingDiv = document.getElementById("typing");
console.log(typingDiv);

text = 'I type, you type, we all type.'
text2 = 'Awesome! You just typed at a speed of  '



const characters = text.split('').map(char => 
    {
    const span = document.createElement("span");
    span.innerText = char;
    typingDiv.append(span);

return span;
})



let cursorIndex = 0;
let cursorCharacter = characters[cursorIndex];
cursorCharacter.classList.add("cursor");
let startTime = null;
let endTime = null;


const keyListener = document.addEventListener('keydown', ({key}) => {
    if(!startTime){
        startTime = new Date()
    }
    
    console.log(key)
    if (key === cursorCharacter.innerText){
    cursorCharacter.classList.remove("cursor");
    cursorCharacter.classList.remove("undone");
    cursorCharacter.classList.add("done");
    cursorCharacter = characters[++cursorIndex];
    
    }
    else {
    cursorCharacter.classList.remove("cursor");
    cursorCharacter.classList.add("undone");
    }


if (cursorIndex >= characters.length){
        endTime = new Date()
        const delta = endTime - startTime;
        const seconds = delta/1000;
        const wps = characters.length / seconds;
        const wpm = parseInt(wps * 60.0 / 5.0);
        document.getElementById('stats').innerText = (text2 + wpm + " Words per minute." );
        document.getElementById('scroll').innerText = ('Scroll Down to see what it means');
        
        //chartUpdates;
        console.log(wpm);
        //Chart1
        myChart.data.labels.splice(8, 1, "YOU");
            myChart.data.datasets[0].data.splice(8, 1, wpm);
        //Chart2
        myChart2.data.labels.splice(0, 1, "YOUR TYPING SPEED");
        myChart2.data.datasets[0].data.splice(0, 1, wpm);
        //Update
        myChart.update();
        myChart2.update();
        let TimeRel1 = parseInt(752.89 / wpm);
        document.getElementById("Result").innerHTML = ("You can finish it in " + TimeRel1 + " Days, Amazing!");
        if (wpm > 60) {
            document.getElementById("Compare").innerHTML = ("Look at that! You type faster than 50 % of the world's population! Way to go!");
          }
          else if (wpm > 30) {
            document.getElementById("Compare").innerHTML = ("Look at that! You type faster than 20 % of the world's population! Way to go!");
          }
          else if (wpm > 5) {
            document.getElementById("Compare").innerHTML = ("Look at that! You type faster than 7 % of the world's population! Way to go!");
          }
        //
        document.removeEventListener("keydown", keyListener);
        return;
        
}
    cursorCharacter.classList.add("cursor");
})


//Chart1 - Types of Keyboard
const ctx = document.getElementById('myChart')
const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Apple Pencil', 'Windows OS', 'Android Stock', 'Swift Keys', 'Sywpe', 'IoS', 'Keyboard', 'Typewriter',],
        datasets: [{
            label: 'Average typing speed (WPM)',
            data: [31, 31.3, 32.3, 33.4, 35.3, 36.5, 44, 65,],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 52, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 99, 192, 0.2)',
                'rgba(54, 122, 235, 0.2)',
                'rgba(255, 96, 126, 0.7)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 52, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(255, 99, 192, 1)',
                'rgba(54, 122, 235, 1)',
                'rgba(155, 96, 86, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

//Chart2 - Comparison of Jobs
const ctx2 = document.getElementById('myChart2')
const myChart2 = new Chart(ctx2, {
    type: 'bar',
    data: {
        labels: [null, 'Academics','Casual','Manufacturing','Tourism','Retail', 'Data Processing', 'Marketing', 'Govt Administration','Technology', 'Medical Care', 'Scentific', 'Entertainment', 'Legal'],
        datasets: [{
            label: 'Required Speed (WPM)',
            data: [null, 38, 44, 46.3, 49.4,51.7,54.6,55.1,55.4,55.5,55.9,56.2,56.7, 60.6,],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        indexAxis: 'y',
        
    }
});

//Chart3
const ctx3 = document.getElementById('myChart3')
const myChart3 = new Chart(ctx3, {
    type: 'line',
    data: {
        labels: ['10-20 WPM', '20-30 WPM', '30-40 WPM', '40-50 WPM', '50-60 WPM', '60-70 WPM', 'over 70'],
        datasets: [
            {
            label: 'Students',
            data: [22,85,103,54,21,3,2],
            backgroundColor: [
                'rgba(255, 99, 132, 0.5)',
              
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
              
            ],
            borderWidth: 1
        },
        {
            label: 'Back-Office Workers',
            data: [18,95,73,38,25,4,1],
           
            backgroundColor: [
                'rgba(159, 200, 180, 0.5)',
              
            ],
            borderColor: [
                'rgba(159, 200, 180, 1)',
              
            ],
            borderWidth: 1
        },
        {
            label: 'Programmers',
            data: [2,5,28,39,58,52,16],
           
            backgroundColor: [
                'rgba(99, 132, 255, 0.5)',
              
            ],
            borderColor: [
                'rgba(99, 132, 255, 1)',
              
            ],
            borderWidth: 1
        },
        {
            label: 'Professional Typist',
            data: [11,29,85,96,43,15,5],
           
            backgroundColor: [
                'rgba(255, 200, 54, 0.5)',
              
            ],
            borderColor: [
                'rgba(255, 200, 54, 1)',
              
            ],
            borderWidth: 1
        }
    ],
        
    },
    options: {
        responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    stacked: false,
    plugins: {
      title: {
        display: true,
        text: 'Sample size of 200 people'
      }
        
    }
}});

//Chart4
const ctx4 = document.getElementById('myChart4')
const myChart4 = new Chart(ctx4, {
    type: 'bar',
    data: {
        labels: ['From Memory', 'Copying',],
        datasets: [{
            label: 'Writing by Hand',
            data: [31, 22],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',

                
            ],
            borderWidth: 1,
        },

           {label: 'Typing on keyboard',
            data: [37, 27],
            backgroundColor: [
                'rgba(54, 162, 235, 0.2)',
                
            ],
            borderColor: [
                'rgba(54, 162, 235, 1)',

                
            ],
            borderWidth: 1
        }],

      
    },
    options: {
        indexAxis: 'y',
        
    }
});

// Chart 5 -  population
const ctx5 = document.getElementById('myChart5')
const myChart5 = new Chart(ctx5, {
    type: 'line',
    data: {
        labels: ['0','5','10','15','20','25','30','35','40','45','50','55','60','65','70','75','80','85','90','95','100','110','120', '130', '140'],
        datasets: [{
            label: 'Population',
            data: [0, 509, 1000, 3000, 7000, 11000, 13500, 15000, 15600, 15000, 14200, 13100, 12000, 11100, 9000, 7500, 6000, 4800, 3000, 2200, 1800, 1500, 1200, 300, 50, 10 ],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1,
            fill: true,
        }]
    },
    
    options: {
        indexAxis: 'x',
        
    }
});


