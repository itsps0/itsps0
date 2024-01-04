<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></script>
    <title>form</title>
</head>
<body>
    <div class="text-center" >
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASUAAACsCAMAAAAKcUrhAAABX1BMVEX///+nxjgAS2j5SQD5RgD+9vL//Pv8m3X6Vhv8kWn/7eb5UQD8tZn+RQD9x7X9vKb9wa38tJz6UhMAR2X5Sg78oIH/+PX8oHz+3tD5LwD7gVf5PgD7fEr7aSz91cX+0cH/59/7ZEP6Yij7bjv7fmL6YCTy9vcAQF/8rZT7Vgv6YjKgwir6/PPm7fD+PAD+4tevzUrn78jW5KT2+eqpv8jt89Tf6rXL3omvzUnT45qzzVa+1G7v9dp/n63O3OHX5aK10TA1bYSXsr0aXHc8Ynr7h1/E2Xm40WC61Syiwlmiv6Tc5s+6z82eurGJq6be6OSjw3q6zLhvmKnC1qlTgpZqkZalwovU3/Ctx5zm7eJHeY6qx28raoKsyIr36dfR286jwnH1wZ660bHbycPQo5TQgGnkY0DZxX2j0Tzh1qDdvbTs2bO+yFvLxWbQkXvP1ITsz6bAw7TGzkCcvV+6zsfVOct2AAANx0lEQVR4nO2di3faRhaHsV6ABJIQRhBeUlGFhQGDATsEG2rDYiebdJ043mziuEm32W3dtOlr+/+fnRk9kMQzTlxyovmSExtmRjP8uHPn3tEjoRAGg8FgMBgMBoPBYDAYDAaDwWAwGAwGgwkcNbq919oH7O21mXUP5pOk1t6/e9Dr9ZrdZrPb7TV7J/d2a1gqNwyQ6LS5UfXQPb27f1hb99A+HQ73T5obM6g2T1rtdQ/uE6Hdmq0Ronmyu+7xfQrUdu/OlQhximUKHd6bb0cWvaDLxOydVJeJtFHt7a17nGul1vIZUrPZg8GAX6eDw3WPdH0wh3e7boFOD+629nd3d/dbdw98Qt0LbEBQ2z1wVOg2D+7tHrbbNagGU2u39w88KgXWNcn7p6YCR0cbJ/uHba+1MO1Wzy3T3WAaE2O5pPv3H/z9oSXR4NHX//j6zKpQ2z11OfDTQAaXNStI6j5+8qIM36h3zi9Ho6vzTtmpszeZddVuEKdc2xLp4OkL+LLe6V+MtojjfqfurrXn+PBqNYD++9AUqXcPBULlTv+Y2EoeDwf+ei1XzBQ4lZBI1Y2DffjJy4P+FZFMXvWnNALz0rXSBc0xHZ7Ala137xDuHtWHxwSRJC5c/sjFvrPQVQPmmF4gS3rwEL14/U8CiDTq12fXrTkJTHX/Lxzi+qk/g5b0+F/w9/KQ2AIiXc6YbCaTFKa6H6R9y/Lzo42jjedoaRtcgLmWJM7nGBLk0PZM1a8CpFL5u+7RUe8p1KXcuQSzjbgaLhDJiasCpVL5Se9oo/kd9NTIbRPE8Wy3bVNrdYOn0uuXIGtDIpWHI+i3l4gUYuxVrtoKjEpn34Dc1hSpP0oCka6WiBQK2dlccLx3+RmwpOdouvWTSKRHS9vY7js48RJ0St9AX13vE+Z0W97GTnmrr259eJ8GZy/vVx/DEKDeRz7pagWRbJWqGwHZ1C0/37j/8nUIOW443UbDZT4JwFh+qXoakGz3dfN+D3puc3UjiHlZiQdrjQvMzkkdBAHIc3egJRHJRRH3BCteqm4EI40rP9m4/y3crR2YIvlyN0bNsP4mDO3E3tXuq0AEAmcvj7p/gp+DYyTSyOO5ZT6r64Vww9OCLrZDoba5KRCQfe/yky6ab/XzpOmU3J6bEfR4PL5DjTPuJsq/a5OgMhjnUF58e/TgzPHcyQuPU8poO3FEip68qaZ4xtk5Ccb5OOZ1F6VvnSsk0sjrlIS4RXZiTLQxbsBdONOUTgIRLb14dvQSiDS4RPPNHykZlinFt3nHR4sFAxjWoTnhmvuBmHB73eaTiVNy5pulSQypRMXj+aKtUqbwJVzzrN2lk0D4bqZ19BiYz3BkrW+mKcmq5YaUiGVMYTsaoPObAvhR61leKRBhQPukC7xS3Zxvzg7umWiJQhsSEimvWPUZIzdmYeAdpAUutNt9CRY4tBEAklzbdb+J2ksaa2iRiJ5VLJORhUiEBz/bp2asFAjXDVSCC9zATN+Ic8t1l/+jOQs/3RATvGqLJG7vpMDvtHlqtxuM5CQUajXPQmXLlJwogP1vyZWUMBPXo2g7GgzDM2aiG5D5FmK+Ar7bTE1Almu/++b7iDqrtqLFSRH8ZH+4hiIF5mrBdmvfMSXHK4XebFf46bqMUNghDRnMtx+7UKWDwFx5ethqg4DSVOncCSjfRuLhqap0Qt+homAmyj/1oEgButj7sGXvKhGuvYC30o5O+2qqhr5j5ik//QxF6gUj6EbQu9ZWtyfNfQuCpJinHqNEJRg1AUeeeXcNL1oKkEghpmZPOMKVwYEZFy/x8qRWxtDi8R2Nt0W67gUlBrAxdygJ9w7lm+9BuF2KqTRQhZHZRkyD8XehCPV6d30dKJ9kUu4QSf8Zgfovm3DvTY8KiiIaeW5nx9o7kU2f9C4oZ+Ac6n2k0mjofhMZUzxOciSAgr/qcFO3/ePP19fXpz+qgUhx3dQv4BlvwnuespyIxF1QUhakv8yrX5tguv3wKkB+2+bseAttLHn3KGm3TFxeANZT++3njeuNd79NnVAJAmem8/afg6Mbv+g7ACqST/ENMMNe/frH/aN3v72SZx/mM2ewlZw6c4Jglbe///77GyUD48uHv/5x1Hz25EUwNQqFHpkqDRfVef38fw8eP/1upVO+nyedFVT68/nThwGWKLSaSitcgfKZs4pKGFslbC+LsFRa6ZKl4GKpdDH3VgoMYIASFGKFa3KDjBV7Y8e0kPqxdYUAnnILsPYEiNEqFy8HFmt/yX95F8bLI8sxEf11j+RTpn5BWGct8TI3H/N+AXTzCXbg87EuFlx5nQtmyGDfV7GSTOXy4GxZnc8T2zOtcMdXvXO+9O7CzxU7soTXMC24CaU+vLw6HwRVJHhzhWNNxGWnPiVEuVx/NLwYjS6nH3gSJB5dEsTEnIaPJkIBgQadYf/imEgGXCPA4HzkzLrk6Pi8P+wghv3+xeUVsbVFYI1CyOkkkxODAokdAqmWTF5dDAPskNwMzq+IiU62XQHpgGl1cJLnMOhfjojkFvwD/4J/iNEVlmiK8mB4fvk3i8vLi3M80WZShqtafTAY1OtlyLrHg8FgMBgMBoPBYDAYDAaD+Qthizyf8XPD+7RkRRTUVSoyDV4QFQDP+2/2XaUx6EaI8fAeILooxm79XiCmkRhrJfKOj53ozXpWtTu5xPJqNB/WKpTZFbwb872Q+XBeJykqx6XAq8wXdyjhJkN9nx6VbA5CkptuSPKGKmU0Kmcs71XYzlEUyVUqFY7T3lMlWijlchQnSZyUhndQaxS1vMcPginmSZLczkbTKS9G8WYzDqhExZZVYpQCSXL5sNmV8J4zjo+AEY/RIDOmSuTSHj8MOgVEyvMqS/u54e2j6ioqsWkOGGvG6uk97wtjoxSp8WjAMhxk8SOqxMhuCWRbA3ZMUYXMQkU8LWV/Ve9xadlrS3N6bQAD1tVlI/Y0njxcpqFRkTQrA6C+Mg1siTOYD/pqbVTeSKXDNmlzdYDvZykqv/DYrBJzNTREzzMomYZopMJuxhFyohJom5rVOKMBA17i9+Siq206JRTteZkpUFLefNtQmVg6CyZg3qxpfMhaJxtaBd2XPYGrRJHjWaIS8O26pyXHVTRn3aWNAnC+pB9bJTHvL+Uq6DkVK6jUiOqcr2M9zdoqOe+GG56OpdjN7+psRCsUuSlFXEgkRaIBI5XmHlo2SqCiu6XEkVQkapqEOgbHJSXPgSPSpqUSm9bBIuYphb1qIrNcJYbPc5TnyBJoW8lnbJXMEkmPqSXYo/16W7zxlKMNCphoKiGIDkJiDL4o+KS2xSrxOkXpUcPVMpHSwEdNIRmiYC0vgFIXopgqmSrRsQiQJOxuKyai4LPCxzAgv7Rg/YflZNbbb1Yic2PVVCkSNYt4llFgj2SUt17fVKRQJp+TsoqvfSMKvfYylbJgyTUanu+H5fMkhZ7MpZQoMiv6Q/SG5b3BB6Wy4FN4CtV0hYTPaGLDUAUxo7IO7pVOFjiKS2U8w6KLUYlCD5cDKukJ13E/zhrHl3L6tCWKJFVSlqhEA9sO+78e2jBHKwsRKjId89oqFbdnRQQZneIExowEST0bjU7cfspI8KpZiw1zZEH1twXfihRjTFsSXM+cKWo57sNVEvXcjByAryxXiQWeJeHXV06UqIoA1YpQ28pUGzsSUIBK00/2Yk2VQjLw7DD49iAVxgL6TtQox2WnJg/QXYLPBMsUcl+4+2W/vBMR5376VeGhSuD78xASudVUMvyFckKnKqLpeLTFKon+TkOqpRI4diya1wolB10HPosioyosi3LkYpXc3/pHU0k3eB/F9O2rRKYVf7eJiK1SCD7IojipIMZSMPDh4MN216MSWJGnISn9tlWa1StJOip5LU2WWUMCAUJxfSrNGjDKxf9qlTguMj+mocGaCheGNc04KR+dAczFb1WlfHhGrwt2zBiQBK9RpQLPzgAmRgszlA/13gI9p9c5yGtUCUYCmXmFS1WaHwnMVqnhUmm6dDFMikNB5+xIIHO7tgSjynmFcLNmbikNouvUVFSZqqCoEqqkT0WVjACVDZlR5fvuszp+CUSVmuov5UFUmWBuS6VGFmQo/lzBRjbAYqcJRZZm/LENIA8zlIx7T0lmBc3KUHiQqI29x5VVHpTqPOqVpPI8O8/lMdPQGXuNkxMoQ3HvFjGsMnYylNtQiTY2zbwTpaPe/6IExPdZsAJW8mHDSHgQ4NacCLLdyNhITNJZI1yA2a656ZIjneMiEkYU7iGE1RB6+Bnq1WzrzclCtJKYwoD5LJhT0G818mBQMEGfHDoF8kI7270NlUCOGcnlcpS57R/1FTLKuALPDlB+0LNvjRIFiyZnDcDLnLVzwhTz3OS4diEoNZ0gmyqAQnJTkqTNzbH3y8lsT21KkfCcSE5PQx1CMkipYQIjOaAzJnkkTlGfUon8GOdQ5Ni4pEfM7sZTW7KqkdecYgcOnUOh+bG2rbvejuja2FnLG2lN03V3YUnLJuxShs8W9IqEgqS8d/nI6NNxlCRVSvmEtQIyxagWqViNUWlF10wFwfqQ+8J9ODq6E3nfdWI2TEPhhRhAmLXa0RlFRKUuBGszHDgE0fW2yGdoT0temLQUREV1Ty1GVQQjnU6H00XfjOPTU6QM3jMv1aKRchUKzn/7JPPZmHsMjJL9gC1KDAaDwWAwGAwGg8FgMBgMBoPBYDAYDAbzUfg/ceDprYKI0awAAAAASUVORK5CYII=" width="300px" height="240px" >
    </div>
        <div class="d-flex justify-content-center fs-1 $display-font-sizes-3.5rem ">
        <p class="text-primary">Login</p>
        </div>
        <form>
            <div class="input-group mb-3" style="width: 500px; margin: 0 auto;">
              <label for="exampleInputEmail1"></label>
              <input type="email"  class="form-control" id="InputEmail1"  placeholder="Enter email/moblie number" style="float: left;">
              <button class="btn btn-success" type="submit"><img src="images/search_icon.png"></button> 
            </div>
            <div class="input-group mb-3" style="width: 500px; margin: 0 auto;">
                <input type="text" class="form-control" placeholder="Search">
                <button class="btn btn-success" type="submit">Go</button> 
              </div>
            <div class="mx-auto" style="width: 500px; pt:2rem;">
                <label for="password"></label>
                <input type="password"  class="form-control" id="password"  placeholder="Enter password ">
              </div>
              <div class="d-flex justify-content-left pt-2">
              <div class="mx-auto" style="width:12.5rem " >
                <input type="checkbox" id="checkbox">
                <label for="checkbox">Remember me</label>
              </div> 
              </div>
              <div class="d-flex justify-content-center p-2 ">
              <div class="text-decoration-none d-flex justify-content-center p-3 m-2 bg-info ">
                 <a class="text-decoration-none" href="#">submit</a>  
            </div>
            <div class="d-flex justify-content-center p-3 m-2 bg-dark ">
                <div >
                  <a class="text-decoration-none " href="#">cancel</a>  
              </div> 
              </div>
              </div>
              <div class="d-flex justify-content-evenly p-2 ">
                <p class="text-primary" > Register here!</p>
                <p  class="text-primary"> Forgot password</p>
                </div>
</form>
</body>
</html>