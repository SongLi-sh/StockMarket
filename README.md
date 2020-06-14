# StockMarket
The project hierarchy is clarified below：

liosng-stock-market-chart-springcloud #(root module)
+ stock-market-chart-euraka   
+ stock-market-chart-zuul     
+ stock-market-chart-services 
  + stock-market-chart-service-common   
  + stock-market-chart-service-company  
  + stock-market-chart-service-excel
  + stock-market-chart-service-mail    
  + stock-market-chart-service-sector   
  + stock-market-chart-service-security 
  + stock-market-chart-service-user     
  + stock-market-chart-service-exchange
 
  
  The below are the command the dockerlise the user service
  1)docker build -t lisongandy/stock-market-chart-service-user .
  
  2) docker run lisongandy/stock-market-chart-service-user -e AUTHOR="lisong" d -p 7001:7001 lisongandy/stock-market-chart-service-user

