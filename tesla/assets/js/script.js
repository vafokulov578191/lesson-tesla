import { db } from './module.js'

let span_count_disk = document.querySelector('.span_count_disk')
let rot_left = document.querySelector('.rot_left')
let rot = document.querySelector('.rot')
let dick_up = document.querySelector('.dick_up')
let dick_down = document.querySelector('.dick_down')
let temp_up = document.querySelector('.temp_up')
let temp_down = document.querySelector('.temp_down')
let span_count_number = document.querySelector('.span_count_number')
let benzin = document.querySelector('.benzin')
let spedd_up = document.querySelector('.spedd_up')
let speed_down = document.querySelector('.speed_down')
let span_count_temp = document.querySelector('.span_count_temp')
let btn_con = document.querySelector('.btn_con')

span_count_disk.innerHTML = 16

function click() {
    dick_up.onclick = () => {
        span_count_disk.innerHTML = 18
        rot.style.width = "135px"
        rot_left.style.width = "135px"
        rot.style.right = "599px";
        rot.style.bottom = "230px";
        rot_left.style.right = "940px";
        rot_left.style.bottom = "231px";
    }

    dick_down.onclick = () => {
        span_count_disk.innerHTML = 16
        rot.style.width = "125px"
        rot_left.style.width = "125px"
        rot.style.right = "584px";
        rot.style.bottom = "235px";
        rot_left.style.right = "935px";
        rot_left.style.bottom = "235px";
    }
    
}
click()


function reload(arr) {
    for(let item of arr) {
        span_count_temp.innerHTML = item.Temperature
        span_count_number.innerHTML = item.speed


        btn_con.onclick = () => {
            if(btn_con.checked == false) {
                benzin.innerHTML = parseInt(benzin.innerHTML) + 30 + 'км'
            }else{
                benzin.innerHTML = parseInt(benzin.innerHTML) - 30 + 'км'
            }
        }

        spedd_up.onclick = () => {
            span_count_number.innerHTML = ++item.speed
            benzin.innerHTML = --item.PowerReserve + 'км'
        }

        speed_down.onclick = () => {
            span_count_number.innerHTML = --item.speed
            benzin.innerHTML = ++item.PowerReserve + 'км'
        }

        temp_up.onclick = () => {
            span_count_temp.innerHTML = ++item.Temperature + '°'
            benzin.innerHTML = --item.PowerReserve + 'км'
        }
        
        temp_down.onclick = () => {
            span_count_temp.innerHTML = --item.Temperature + '°'
            benzin.innerHTML = ++item.PowerReserve + 'км'
        }
    }
}
reload(db)
