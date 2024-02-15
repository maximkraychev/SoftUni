package ConditionalStatementsExercise;

import java.util.Scanner;

public class Shopping {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        double budget = Double.parseDouble(scanner.nextLine());
        int numberOfGPU = Integer.parseInt(scanner.nextLine());
        int numberOfCPU = Integer.parseInt(scanner.nextLine());
        int numberOfRAM = Integer.parseInt(scanner.nextLine());

        double priceForGPU = numberOfGPU * 250.00;
        double priceForCPU = numberOfCPU * (priceForGPU * 0.35);
        double priceForRAM = numberOfRAM * (priceForGPU * 0.10);

        double totalPrice = priceForGPU + priceForCPU + priceForRAM;

        if (numberOfGPU > numberOfCPU) {
            totalPrice *= 0.85;
        }

        double difference = Math.abs(budget - totalPrice);

        if (budget >= totalPrice) {
            System.out.printf("You have %.2f leva left!", difference);
        } else {
            System.out.printf("Not enough money! You need %.2f leva more!", difference);
        }
    }
}
