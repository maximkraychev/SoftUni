package Exam;

import java.util.Scanner;

public class ExcursionCalculator {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int people = Integer.parseInt(scanner.nextLine());
        String season = scanner.nextLine();

        double totalSum = 0;

        switch (season) {
            case "spring":
                if (people > 5) {
                    totalSum = people * 48.00;
                } else {
                    totalSum = people * 50.00;
                }
                break;
            case "summer":
                if (people > 5) {
                    totalSum = people * 45.00;
                } else {
                    totalSum = people * 48.50;
                }
                totalSum *= 0.85;
                break;
            case "autumn":
                if (people > 5) {
                    totalSum = people * 49.50;
                } else {
                    totalSum = people * 60.00;
                }
                break;
            case "winter":
                if (people > 5) {
                    totalSum = people * 85.00;
                } else {
                    totalSum = people * 86.00;
                }
                totalSum *= 1.08;
                break;
        }

        System.out.printf("%.2f leva.", totalSum);
    }
}
