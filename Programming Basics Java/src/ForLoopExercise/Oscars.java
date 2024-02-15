package ForLoopExercise;

import java.util.Scanner;

public class Oscars {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        String nominated = scanner.nextLine();
        double points = Double.parseDouble(scanner.nextLine());
        int jury = Integer.parseInt(scanner.nextLine());

        for (int i = 1; i <= jury; i++) {
            int multiplayer = scanner.nextLine().length();
            double currentJuryPoints = Double.parseDouble(scanner.nextLine());

            points += (currentJuryPoints * multiplayer) / 2;

            if (points > 1250.5) {
                break;
            }
        }

        if (points > 1250.5) {
            System.out.printf("Congratulations, %s got a nominee for leading role with %.1f!", nominated, points);
        } else {
            double diff = 1250.5 - points;
            System.out.printf("Sorry, %s you need %.1f more!", nominated, diff);
        }
    }
}
