package ConditionalStatementsExercise;

import java.util.Scanner;

public class LunchBreak {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String movieTitle = scanner.nextLine();
        int durationOfMovie = Integer.parseInt(scanner.nextLine());
        int durationOfBreak = Integer.parseInt(scanner.nextLine());

        double timeForLunch = durationOfBreak * 0.125;
        double timeForRest = durationOfBreak * 0.25;
        double timeForMovie = durationOfBreak - (timeForRest + timeForLunch);

        double difference = Math.ceil(Math.abs(timeForMovie - durationOfMovie));

        if (timeForMovie >= durationOfMovie) {
            System.out.printf("You have enough time to watch %s and left with %.0f minutes free time.", movieTitle, difference);
        } else {
            System.out.printf("You don't have enough time to watch %s, you need %.0f more minutes.", movieTitle, difference);
        }
    }
}
