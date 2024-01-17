Feature: Smoke Test Server

Background:
  Given the server is running

Scenario: Root version propery
  When the root endpoint is requested
  Then the response contains a version property