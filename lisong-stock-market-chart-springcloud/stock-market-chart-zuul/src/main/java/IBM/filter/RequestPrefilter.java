package IBM.filter;

import com.netflix.zuul.ZuulFilter;
        import com.netflix.zuul.exception.ZuulException;
        import org.springframework.cloud.netflix.zuul.filters.support.FilterConstants;

public class RequestPrefilter extends ZuulFilter {
    @Override
    public String filterType() {
        return FilterConstants.PRE_TYPE;
    }

    @Override
    public int filterOrder() {
        return 0;
    }

    @Override
    public boolean shouldFilter() {
        return true;
    }

    @Override
    public Object run() throws ZuulException {
        return null;
    }
}
