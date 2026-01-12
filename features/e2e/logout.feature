Feature: Logout SauceDemo

  Scenario: El usuario cierra sesión correctamente
    Given el usuario ingresa a SauceDemo
    When inicia sesión con credenciales válidas
    And cierra sesión
    Then debe regresar a la pantalla de login
