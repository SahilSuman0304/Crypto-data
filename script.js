async function fetchdata(){
  const url="https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false";
  const response = await fetch(url);
  const data = await response.json();
  return data;
} 


async function callFetch(){
  const resData = await fetchdata();
  let tabledata = '';
  resData.map((values,index)=>{
    tabledata +=`<tr>
    <td><img src = "${values.image}"/>  ${values.name}</td>
    <td></td>
    <td>${values.symbol}</td>
    <td>$${values.current_price}</td>
    <td>$${values.total_volume.toLocaleString()}</td>
    <td class = "${values.price_change_percentage_24h > 0 ? "positiveVal":"negetiveVal"}">${values.price_change_percentage_24h.toFixed(2)}%</td>
    <td>Mkt Cap :$ ${values.market_cap.toLocaleString()}</td>
    </tr>
    `
  })
  document.getElementById("t-body").innerHTML =tabledata;
}
callFetch();