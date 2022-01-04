const shopItem = document.querySelectorAll('.shop-item') ;
console.log(shopItem)
const shopBtns= document.querySelectorAll('.btn-dark');


shopBtns.forEach(function(shopBtn){
  shopBtn.addEventListener('click', function(event){
      // console.log(event.target.classList.contains('btn-dark'))
      if( event.target.classList.contains('btn-dark')){
         

        var shopPriceOriginal = event.target.previousElementSibling.previousElementSibling.textContent;
        var shopPrice = parseFloat(shopPriceOriginal.replace('$', ''))
        var shopTitle = event.target.previousElementSibling.previousElementSibling.previousElementSibling.textContent;
        var shopImage = event.target.parentElement.parentElement.firstElementChild.src ;
      
        const cartItemAdded = {};
          cartItemAdded.shopPrice = shopPrice;
          cartItemAdded.shopTitle = shopTitle ;
          cartItemAdded.shopImage = shopImage;
          console.log(cartItemAdded)
          

        const cartItem = document.createElement('div');
        cartItem.classList.add('row', 'p-4','bg-dark','text-light')

        cartItem.innerHTML += `
    
          <div class="col-md-3 ">
             <img src="${cartItemAdded.shopImage}" alt="cart image" class="img-fluid cart-image w-50">
             <p class="cart-item-title">${cartItemAdded.shopTitle}</p>
          </div>

           <div class="col-md-3">
            <p class="lead cart-item-price">$${cartItemAdded.shopPrice}</p>
           </div>

           <div class="col-md-3 d-flex justify-content-around">
             <h3><i class="bi bi-plus-circle"></i></h3>
             <p class="lead cart-item-quantity">1</p>
             <h3><i class="bi bi-dash-circle"></i></h3>
           </div>

          <div class="col-md-3">
            <h3><i class="bi bi-trash-fill"></i></h3>
            </div>
         `
         //Avoiding the same item from being added to cart twice
          alert('Item has been added to cart')
      

         //selecting cart

         const cart = document.getElementById('caart-info');
         //selecting total amount to be updated
         const total = document.getElementById('cart-total-amount');
         const totalCon= document.querySelector('.cart-total');

         cart.append(cartItem)   
         updateTotal()

        };
        function updateTotal(){
           total =[0];
           const items = document.querySelectorAll('.cart-item-price');

           items.forEach(function(item){
             total.push(parseFloat(item.textContent.replace('$',0)));
        });
     
      
          const totalMoney = total.reduce (function(total, item){
            var element= document.querySelector('.cart-item-quantity')
            var value = parseFloat(element.innerHTML) ;
            
            total += item * value;
            return total
          });

        console.log(totalMoney)
        finalMoney ='$'+ totalMoney.toFixed(2)
        console.log(finalMoney)
            //end of function updateTotal

        document.getElementById('cart-total-amount').textContent =finalMoney;

        // the trash icon to remove elements from cart
        deleteBtns = document.querySelectorAll('.bi-trash-fill')
        
          deleteBtns.forEach(function(deleteBtn){
            deleteBtn.addEventListener('click', function(event){
               event.target.parentElement.parentElement.parentElement.remove();
               updateTotal();
            });
          
          });
          //end of trash item icon

          //increament and decreament function

        increamentBtns = document.querySelectorAll('.bi-plus-circle');
        decreamentBtns = document.querySelectorAll('.bi-dash-circle');
        itemQuantitiesOriginal = document.querySelectorAll('.cart-item-quantity');

        
        
        
        increamentBtns.forEach(function(increamentBtn){
          increamentBtn.addEventListener('click',function(event){
            var element= event.target.parentElement.nextElementSibling;
            var value = parseFloat(element.innerHTML) ;
            console.log(value);

            ++value

            element.innerHTML = value;
          });
        });
        
        //decreament of units in cart
        decreamentBtns.forEach(function(decreamentBtn){
          decreamentBtn.addEventListener('click',function(event){
            var element= event.target.parentElement.previousElementSibling;
            console.log(event);
            var value = parseFloat(element.innerHTML) ;
            if(value > 1) {

              -- value
            }
            
            

            element.innerHTML = value;
          });
        });
          
      
      }
 

      });
     
  });

  