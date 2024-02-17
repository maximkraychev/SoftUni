package Exam;

import java.util.Scanner;

public class Workout {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int days = Integer.parseInt(scanner.nextLine());
        double distance = Double.parseDouble(scanner.nextLine());

        double totalDistance = distance;

        for (int i = 1; i <= days; i++) {
            int increase = Integer.parseInt(scanner.nextLine());
            distance += distance * (increase / 100.00);
            totalDistance += distance;
        }

        int diff = (int) Math.ceil(Math.abs(totalDistance - 1000));

        if (totalDistance >= 1000) {
            System.out.printf("You've done a great job running %d more kilometers!", diff);
        } else {
            System.out.printf("Sorry Mrs. Ivanova, you need to run %d more kilometers", diff);
        }
    }
}
