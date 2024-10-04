Snowflake queries - 

*get all transaction of an address from snowflake*

`select * from marts.indexer.eth_entries where address='0x73b0f910a6eff001e717be8efcbe8e7f5d13ecf2'`

*sum of all transfers (TRS)*

`SET wallet_id = left('5cd9298bbd431c743a3216c91615c6e3',24);

with transferred_coins as (
SELECT wallet_id as wallet_id, coin, sum(value_string::integer) as coin_count_base_units
FROM "MARTS"."WALLET_PLATFORM"."BITGO2__TRANSFER"
WHERE wallet_id = $wallet_id
and state = 'confirmed'
GROUP BY wallet_id, coin
),


default_coin as (
SELECT
id as wallet_id,
coin,
0 as coin_count_base_units
FROM "MARTS"."WALLET_PLATFORM"."BITGO2__WALLET"
WHERE id = $wallet_id
limit 1
), final as (
SELECT wallet_id, coin, coin_count_base_units
FROM transferred_coins
UNION ALL
SELECT wallet_id, coin, coin_count_base_units
FROM default_coin
WHERE coin not in (SELECT coin from transferred_coins)
)

Select * from final`


