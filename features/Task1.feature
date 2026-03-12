Feature: Course Table Validation

  Scenario: Print course names where language is Java and level is Advanced

    Given I open the course table page
    When I apply filters for Java and Advanced courses
    Then I print the course names