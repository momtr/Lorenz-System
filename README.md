# Lorenz-System
The lorenz system (lorenz attractor) is a system of ordinary differential equations. It was first studied by Edward Lorenz.

![lorenz_system](https://github.com/moritzmitterdorfer/Lorenz-System/blob/master/imgs/screen.png)


## Mathematically
It is based on following ordinary differential equations:

> ![first](https://github.com/moritzmitterdorfer/Lorenz-System/blob/master/imgs/first.png)

> ![second](https://github.com/moritzmitterdorfer/Lorenz-System/blob/master/imgs/second.png)

> ![third](https://github.com/moritzmitterdorfer/Lorenz-System/blob/master/imgs/third.png)

Since we want to define the time-step-size per draw loop, we define `dt` and multiply each equation by `dt`. This gives us:

> ![first](https://github.com/moritzmitterdorfer/Lorenz-System/blob/master/imgs/first_dt.png)

> ![second](https://github.com/moritzmitterdorfer/Lorenz-System/blob/master/imgs/second_dt.png)

> ![third](https://github.com/moritzmitterdorfer/Lorenz-System/blob/master/imgs/third_dt.png)

Now, we define the values of the constants rho, sigmoid and beta. This gives us:

> ![first](https://github.com/moritzmitterdorfer/Lorenz-System/blob/master/imgs/first_num.png)

> ![second](https://github.com/moritzmitterdorfer/Lorenz-System/blob/master/imgs/second_num.png)

> ![third](https://github.com/moritzmitterdorfer/Lorenz-System/blob/master/imgs/third_num.png)

We can use these three formulas to calculate the changes of x, y and z of of points. Therefore we have to add the changes to the current values, which gives us a new point `(x + dx, y + dy, z + dz) -> t + td -> (x, y, z)`.
