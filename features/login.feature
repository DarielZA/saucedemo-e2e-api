Feature: Login SauceDemo

  Scenario: Login exitoso
    Given el usuario ingresa a SauceDemo
    When inicia sesión con credenciales válidas
    Then debe ver la pantalla de productos

  Scenario: Login fallido con credenciales inválidas
    Given el usuario ingresa a SauceDemo
    When inicia sesión con credenciales inválidas
    Then debe ver un mensaje de error

Feature: Logout

  Scenario: El usuario cierra sesión correctamente
    Given el usuario ingresa a SauceDemo
    When inicia sesión con credenciales válidas
    And cierra sesión
    Then debe regresar a la pantalla de login
