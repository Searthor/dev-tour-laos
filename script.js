const btn_logo =document.querySelector('.btn_login')
const eye =document.getElementById('eye')

eye.addEventListener('click',()=>{
    const checkpassword = document.getElementById('password');
    if(checkpassword.type =="password"){
        checkpassword.type ="text"
    }else{
        checkpassword.type ="password"
    }
});
btn_logo.addEventListener('click',()=>{
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const userValidation = document.getElementById('uservali');
    const passValidation = document.getElementById('passvili');

    if(username ==""){
        userValidation.classList.add('active')
    };
    if(password ==""){
        passValidation.classList.add('active')
        passValidation.innerHTML="ກະລຸນາປ້ອນລະຫັດຜ່ານຂອງທ່ານ"
    }
    
    if(username !=""){
        userValidation.classList.remove('active')
    };
    if(password !=""){
        passValidation.classList.remove('active')
        if(password.length >20){
            passValidation.classList.add('active')
            passValidation.innerHTML="ລະຫັດຜ່ານບໍ່ຄວນເກີນ 20ຕົວອັກສອນ"
        }
        else if(password.length <6){
            passValidation.classList.add('active')
            passValidation.innerHTML="ລະຫັດຜ່ານບໍ່ຄວນຕ່ຳກວ່າ 6 ຕົວອັກສອນ"
    
        }
        if(password =="password"){
            passValidation.classList.add('active')
            passValidation.innerHTML="ບໍ່ຄວນຕັ້ງPassword ເປັນລະຫັດຜ່ານເພື່ອຄວາມປອດໄພຂອງບັນຊີຂອງທ່ານ"
    
       
        }
        else if(password =="Password"){
            passValidation.classList.add('active')
            passValidation.innerHTML="ບໍ່ຄວນຕັ້ງPassword ເປັນລະຫັດຜ່ານເພື່ອຄວາມປອດໄພຂອງບັນຊີຂອງທ່ານ"
        }
        ;
    };
    

    
})