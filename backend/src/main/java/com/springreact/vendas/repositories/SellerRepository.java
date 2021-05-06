package com.springreact.vendas.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springreact.vendas.entities.Seller;

public interface SellerRepository extends JpaRepository<Seller, Long> {

}
