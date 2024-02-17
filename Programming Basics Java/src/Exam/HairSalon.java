package Exam;

import java.util.Scanner;

public class HairSalon {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int dailyTarget = Integer.parseInt(scanner.nextLine());

        String input = scanner.nextLine();
        int earnedMoney = 0;

        while (!input.equals("closed")) {

            String action = scanner.nextLine();

            if (input.equals("haircut")) {
                switch (action) {
                    case "mens":
                        earnedMoney += 15;
                        break;
                    case "ladies":
                        earnedMoney += 20;
                        break;
                    case "kids":
                        earnedMoney += 10;
                        break;
                }
            } else if (input.equals("color")) {
                switch (action) {
                    case "touch up":
                        earnedMoney += 20;
                        break;
                    case "full color":
                        earnedMoney += 30;
                        break;
                }
            }

            if (earnedMoney >= dailyTarget) {
                break;
            }

            input = scanner.nextLine();
        }

        if (earnedMoney >= dailyTarget) {
            System.out.println("You have reached your target for the day!");
            System.out.printf("Earned money: %dlv.", earnedMoney);
        } else {
            System.out.printf("Target not reached! You need %dlv. more.\n", dailyTarget - earnedMoney);
            System.out.printf("Earned money: %dlv.", earnedMoney);
        }
    }
}
