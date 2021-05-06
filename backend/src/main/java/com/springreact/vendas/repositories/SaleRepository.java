package com.springreact.vendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springreact.vendas.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale, Long> {

}
