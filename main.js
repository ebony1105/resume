siteWelcome.classList.remove('active')

let specialTag = document.querySelectorAll('[data-x]');

//添加offset类
for(let i = 1;i < specialTag.length;i++){
    specialTag[i].classList.add('offset')
}

findcloset();

window.onscroll = function (x) {
    if (window.screenY > 0) {
        TopNavBar.classList.add('sticky')
    }
    else {
        TopNavBar.classList.remove('sticky')
    }
    console.log('window.scrollY: '+ window.scrollY);


  /*  for(let i = 0; i < specialTag.length;i++)
    {
        specialTag[i].classList.remove('active');
    }
    specialTag[minIndex].classList.add('active');
    */
    findcloset();
}

let liTags = document.querySelectorAll('nav.menu > ul > li')
for (let i = 0; i < liTags.length; i++) {
    liTags[i].onmouseenter = function (x) {
        x.currentTarget.classList.add('active')
    }
    liTags[i].onmouseleave = function (x) {
        x.currentTarget.classList.remove('active')
    }
}


function findcloset(){
    let specialTag = document.querySelectorAll('[data-x]');

    let minIndex = 0;

    for(let i = 1;i < specialTag.length;i++)
    {
        if(Math.abs(specialTag[i].offsetTop - window.scrollY )< Math.abs(specialTag[minIndex].offsetTop - window.scrollY))
        {
            minIndex = i
        }
    }
    console.log('minIndex: ' + minIndex);


    //minIndex 就是离窗口顶部最近的元素
    specialTag[minIndex].classList.remove('offset')
    let id = specialTag[minIndex].id;
    console.log('id: '+id)
    let a = document.querySelector('a[href="#' + id + '"]')
    let li = a.parentNode
    let bro = li.parentNode.children
    for(let i =0; i < bro.length; i++)
    {
        bro[i].classList.remove('highlight')
    }
    li.classList.add('highlight')
}

function animate(time) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
}

requestAnimationFrame(time);

let aTags = document.querySelectorAll('nav.menu > ul > li > a');
for (let i = 0; i < aTags.length; i++) {
    aTags[i].onclick = function (x) {
        x.preventDefault();
        let a = x.currentTarget;
        let href = a.getAttribute('href');
        let element = document.querySelector(href);
        let top = element.offsetTop;
        let currentTop = window.scrollY; //当前的页面位置
        let targetTop = top - 80; //目标到达的页面位置
        let s = targetTop - currentTop;
        let t = Math.abs((s/100) * 300);
        if(t>500){t=500;}

        const coords = { y: currentTop };
        const tween = new TWEEN.Tween(coords)
            .to({ y: targetTop },t)
            .easing(TWEEN.Easing.Cubic.InOut)
            .onUpdate(function () {
                window.scrollTo(0, coords.y)
                console.log(0,coords.y)
            })
            .start();

        /*let n = 40; //动多少次
        let i = 0;
        let currentTop =  window.scrollY; //当前的页面位置
        let targetTop = top - 80; //目标到达的页面位置
        let distance = (targetTop - currentTop) / n //每次动多少位置
        let duration = 500 / n; //duration time
        let id = setInterval(()=>{
            if(i === n)
            {
                window.clearInterval(id)
                return
            }
            else
            {
                i = i + 1
                window.scrollTo(0, currentTop + distance * i)
            }
        },duration)*/

    }
}