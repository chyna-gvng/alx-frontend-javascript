namespace Subjects {
    export class Cpp extends Subjects.Subject {
      getRequirements() {
        return "Here is the list of requirements for Cpp";
      }
  
      getAvailableTeacher() {
        if (this.teacher.experienceTeachingC !== undefined) {
          return `Available Teacher: ${this.teacher.firstName}`;
        } else {
          return "No available teacher";
        }
      }
    }
  }
  