package IBM.dto;

import cn.afterturn.easypoi.excel.annotation.Excel;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import java.io.Serializable;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ExcelStockData implements Serializable {

    private static final long serialVersionUID = 3779555652312894844L;

    @Excel(name = "Company Code", orderNum = "0")
    private String companyCode;

    @Excel(name = "Stock Exchange", orderNum = "1")
    private String stockExchange;

    @Excel(name = "Price Per Share(in Rs)", orderNum = "2")
    private String currentPrice;

    @Excel(name = "Date", orderNum = "3")
    private String _date;

    @Excel(name = "Time", orderNum = "4")
    private String _time;
}
