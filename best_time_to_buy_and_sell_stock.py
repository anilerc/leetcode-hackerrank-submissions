class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        min_until_now = math.inf
        max_profit = 0
        
        for price in prices:
            if(price < min_until_now):
                min_until_now = price
            else:
                max_profit = max(max_profit, price-min_until_now)
            
        return max_profit
