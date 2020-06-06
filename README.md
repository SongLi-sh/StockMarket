# StockMarket
The project hierarchy is clarified below：

liosng-stock-market-chart-springcloud #(root module)
--stock-market-chart-euraka   # level-1 submodule
--stock-market-chart-zuul     # level-1 submodule
--stock-market-chart-services # level-1 submodule
  --stock-market-chart-service-common   # level-2 submodule
  --stock-market-chart-service-company  # level-2 submodule
  --stock-market-chart-service-excel    # level-2 submodule
  --stock-market-chart-service-mail     # level-2 submodule
  --stock-market-chart-service-sector   # level-2 submodule
  --stock-market-chart-service-security # level-2 submodule
  --stock-market-chart-service-user     # level-2 submodule
  --stock-market-chart-service-exchange # level-2 submodule
  
  
  
  
  The below are the command the dockerlise the user service
  1)docker build -t lisongandy/stock-market-chart-service-user .
  
  2) docker run lisongandy/stock-market-chart-service-user -e AUTHOR="lisong" d -p 7001:7001 lisongandy/stock-market-chart-service-user

