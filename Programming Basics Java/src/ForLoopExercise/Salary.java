package ForLoopExercise;

import java.util.Scanner;

public class Salary {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        int numberOfTabs = Integer.parseInt(scanner.nextLine());
        double salary = Double.parseDouble(scanner.nextLine());

        for (int i = 1; i <= numberOfTabs; i++) {
            String visitedSite = scanner.nextLine();

            switch (visitedSite) {
                case "Facebook":
                    salary -= 150;
                    break;
                case "Instagram":
                    salary -= 100;
                    break;
                case "Reddit":
                    salary -= 50;
            }

            if (salary <= 0) {
                break;
            }
        }

        if (salary > 0) {
            System.out.println((int)salary);
        } else {
            System.out.println("You have lost your salary.");
        }
    }
}