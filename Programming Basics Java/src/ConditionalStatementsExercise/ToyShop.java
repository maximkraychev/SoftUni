package ConditionalStatementsExercise;

import java.util.Scanner;

public class ToyShop {
    public static void main(String[] arg) {
        Scanner scan = new Scanner(System.in);

        double excursionPrice = Double.parseDouble(scan.nextLine());

        int numberOfPuzzle = Integer.parseInt(scan.nextLine());
        int numberOfDolls = Integer.parseInt(scan.nextLine());
        int numberOfBears = Integer.parseInt(scan.nextLine());
        int numberOfMinion = Integer.parseInt(scan.nextLine());
        int numberOfTrucks = Integer.parseInt(scan.nextLine());

        double priceOfPuzzle = numberOfPuzzle * 2.60;
        double priceOfDolls = numberOfDolls * 3.00;
        double priceOfBears = numberOfBears * 4.10;
        double priceOfMinion = numberOfMinion * 8.20;
        double priceOfTrucks = numberOfTrucks * 2.00;

        double totalPrice = priceOfPuzzle + priceOfDolls + priceOfBears + priceOfMinion + priceOfTrucks;
        int totalToys = numberOfPuzzle + numberOfDolls + numberOfBears + numberOfMinion + numberOfTrucks;

        if (totalToys >= 50) {
            totalPrice *= 0.75;
        }

        totalPrice *= 0.90;

        double profit = Math.abs(totalPrice - excursionPrice);

        if (totalPrice >= excursionPrice) {
            System.out.printf("Yes! %.2f lv left.", profit);
        } else {
            System.out.printf("Not enough money! %.2f lv needed.", profit);
        }
    }
}
