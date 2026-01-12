Feature: Compra de producto en SauceDemo

  Scenario: Usuario realiza una compra exitosamente
    Given el usuario ingresa a SauceDemo
    And inicia sesión con credenciales válidas
    When agrega un producto al carrito
    And completa el proceso de checkout
    Then la compra debe completarse exitosamente
