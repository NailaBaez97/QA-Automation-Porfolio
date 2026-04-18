Feature:Creacion de Mascotas

Scenario: Crea una mascota nueva con Post
Given url 'https://petstore.swagger.io/v2/pet'
    And request
    """
    {
      "id": 123456,
      "name": "Firulais",
      "photoUrls": ["foto1"],
      "status": "available"
    }
    """
    When method POST
    Then status 200
    And match response.id == 123456
    And match response.name == "Firulais"