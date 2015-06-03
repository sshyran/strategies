package com.synereo.ltcctbc.frugl.Absyn; // Java Package generated by the BNF Converter.

public class InjectionRight extends Term {
  public final Term term_;

  public InjectionRight(Term p1) { term_ = p1; }

  public <R,A> R accept(com.synereo.ltcctbc.frugl.Absyn.Term.Visitor<R,A> v, A arg) { return v.visit(this, arg); }

  public boolean equals(Object o) {
    if (this == o) return true;
    if (o instanceof com.synereo.ltcctbc.frugl.Absyn.InjectionRight) {
      com.synereo.ltcctbc.frugl.Absyn.InjectionRight x = (com.synereo.ltcctbc.frugl.Absyn.InjectionRight)o;
      return this.term_.equals(x.term_);
    }
    return false;
  }

  public int hashCode() {
    return this.term_.hashCode();
  }


}