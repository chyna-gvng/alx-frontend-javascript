namespace Subjects {
    export class Java extends Subjects.Subject {
      getRequirements() {
        return "Here is the list of requirements for Java";
      }
  
      getAvailableTeacher() {
        if (this.teacher.experienceTeachingJava !== undefined) {
          return `Available Teacher: ${this.teacher.firstName}`;
        } else {
          return "No available teacher";
        }
      }
    }
  }
  