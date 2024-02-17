package Exam;

import java.util.Scanner;

public class DeerOfSanta {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int missingDays = Integer.parseInt(scanner.nextLine());
        int food = Integer.parseInt(scanner.nextLine());
        double foodPerDayForFirstDeer = Double.parseDouble(scanner.nextLine());
        double foodPerDayForSecondDeer = Double.parseDouble(scanner.nextLine());
        double foodPerDayForThirdDeer = Double.parseDouble(scanner.nextLine());

        double totalFoodNeeded = (missingDays * foodPerDayForFirstDeer) + (missingDays * foodPerDayForSecondDeer) + (missingDays * foodPerDayForThirdDeer);

        double diff = Math.abs(food - totalFoodNeeded);

        if (food >= totalFoodNeeded) {
            System.out.printf("%d kilos of food left.", (int) Math.floor(diff));
        } else {
            System.out.printf("%d more kilos of food are needed.", (int) Math.ceil(diff));
        }
    }
}
