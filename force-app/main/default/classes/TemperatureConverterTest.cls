@isTest
private class TemperatureConverterTest {
    @isTest static void testWarmTemp() {
        Decimal c = TemperatureConverter.fahrenheitToCelsius(70);
        System.assertEquals(21.11, c);
    }
}