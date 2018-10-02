## Steps to run:

### Install docker in your system
refer to the following link: (https://www.docker.com/products/docker-engine)

### Login to docker from terminal

```linux
$ docker login
```
### Pull and run the image from the remote repository
 ```linux
 $ docker run -p 4000:90 likarajo/clock:1.0
```
> The user needs to goto internet browser, type **localhost:4000** as the url in the address bar, and press enter.
The user can then view the clock in the web browser.

> No matter where docker run executes, it pulls your image, along with all the dependencies, and runs the program code. 
It all travels together in a neat little package, and you don’t need to install anything on the host machine for Docker to run it.

## Steps to use

### The User has to select the timezone for which he wants to view the clock - either UTC or Local.

Once the user selects the option and clicks on Show Clock button, the corresponding page will open in a new window.

Therein, the user has to select the options for the attributes of the clock and the respective formats - namely,

* Day of Week
  + Full name (Monday, Tuesday, etc.)
  + Short name (Mon, Tue, etc.)
* Date
* Month
  + Full name (March, April, etc.)
  + Short name (Mar, Apr, etc.)
  + Month number (2-digit) (03, 04, etc.)
* Year
  + Full year (2018, 2019, etc.)
  + Short year (2-digit) (18, 19, etc.)
* Hours
  + 24 hrs (11, 12, 13, etc.)
  + 12 hrs (11, 12, 01) with AM/PM
* Minutes
* Seconds
* Milliseconds

As the user selects the options, the corresponding attributes of the clock gets displayed.
