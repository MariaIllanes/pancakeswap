const countElementStat1 = document.getElementById("count-circulating");

function countCirculating() {
    let count = 0;
    const interval = 1;
    const target = 224752258;
   
    function updateCountStat1() {
        countElementStat1.textContent = count;
        count+= 2000000;
        if (count <= target) {
            setTimeout(updateCountStat1, interval);
      }
   }

   updateCountStat1();
}

countCirculating();






const countElementStat2 = document.getElementById("count-total-supply");

function countTotalSupply() {
    let count = 0;
    const interval = 1;
    const target = 387913445;
   
    function updateCountStat2() {
        countElementStat2.textContent = count;
        count+= 2500000;
        if (count <= target) {
            setTimeout(updateCountStat2, interval);
      }
   }

   updateCountStat2();
}

countTotalSupply();




const countElementStat3 = document.getElementById("count-token-burn");

function countTokenSupply() {
    let count = 0;
    const interval = 1;
    const target = 1027180086;
   
    function updateCountStat3() {
        countElementStat3.textContent = count;
        count+= 10000000;
        if (count <= target) {
            setTimeout(updateCountStat3, interval);
      }
   }

   updateCountStat3();
}

countTokenSupply();
