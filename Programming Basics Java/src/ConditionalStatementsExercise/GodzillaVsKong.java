package ConditionalStatementsExercise;

import java.util.Scanner;

public class GodzillaVsKong {
    public static void main(String[] arg) {
        Scanner scan = new Scanner(System.in);

        double movieBudget = Double.parseDouble(scan.nextLine());
        int numberOfPeople = Integer.parseInt(scan.nextLine());
        double priceForClothPerPerson = Double.parseDouble(scan.nextLine());

        double priceForDecors = movieBudget * 0.10;
        double priceForCloths = numberOfPeople * priceForClothPerPerson;

        if (numberOfPeople > 150) {
            priceForCloths *= 0.90;
        }

        double totalExpenses = priceForDecors + priceForCloths;

        double moneyOverOrUnder = Math.abs(movieBudget - totalExpenses);

        if (movieBudget >= totalExpenses) {
            System.out.println("Action!");
            System.out.printf("Wingard starts filming with %.2f leva left.", moneyOverOrUnder);
        } else {
            System.out.println("Not enough money!");
            System.out.printf("Wingard needs %.2f leva more.", moneyOverOrUnder);
        }
    }
}
