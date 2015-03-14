## Pre Requirements
You need to have **node.js**, **npm** and **bower** installed in you system for client side stuff. 

For the server side functionality, this sample application uses latest [ASP.NET 5](https://github.com/aspnet/Home). You can isntall ASP.NET 5 by following the directions [here](https://github.com/aspnet/Home#optimistic-dnvm). Once you have `dnvm`, run `dnvm upgrade` to get the latest stuff.

## Starting the Application
Navigate to `src` directory and run the following commands to make everything available
    
    npm install
    bower install
    gulp
    
These commands will install node modules, bower components and run the default gulp task which will make everything ready in terms of client side stuff.

To get it up and running, run the following commands while you are on `src`:

    kpm restore
    dnx . web
    
You can now navigate to **http://localhost:5001/** and you will have the sample ready.