import { Pagination } from "@nextui-org/react";
import React, { useState } from "react";

export default function PaginationBar(props) {
  const pokemons = props.pokemonData.rootPokeData
  const pageAmount = Math.ceil(pokemons / 20);

  const pageChange = (page) => {
    console.log('onpagechange', page);
    if(page !== 1){
      return props.setCurrentPage(page * 20);
    } else {
      return props.setCurrentPage(0);
    }
  }


    return (
    <Pagination total={pageAmount} initialPage={1} onChange={pageChange}/>
    )
  }
