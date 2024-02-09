package FirstStepsInCodingExercise;

import java.util.Scanner;

public class BasketballEquipment {
    public static void main(String[] arg) {
        Scanner scan = new Scanner(System.in);

        int yearlyTaxForBasketball = Integer.parseInt(scan.nextLine());

        double shoesPrice = yearlyTaxForBasketball * 0.60;
        double outfitPrice = shoesPrice * 0.80;
        double ballPrice = outfitPrice * 0.25;
        double accessories = ballPrice * 0.20;

        System.out.println(yearlyTaxForBasketball + shoesPrice + outfitPrice + ballPrice + accessories);
    }
}
